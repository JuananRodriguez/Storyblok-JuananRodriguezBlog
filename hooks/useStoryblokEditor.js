import { useState, useEffect } from 'react';

const useStoryblokEditor = (initialStory) => {

    const [story, setStory] = useState(initialStory);

    useEffect(() => {
        if (window.storyblok) {
            window.storyblok.init();
            
            // reload on Next.js page on save or publish event in Storyblok Visual Editor
            window.storyblok.on(['change', 'published'], () => location.reload(true))

            // Update state.story on input in Visual Editor
            // this will alter the state and replaces the current story with a current raw story object and resolve relations
            window.storyblok.on('input', (event) => {
                if (event.story.content._uid === story.content._uid) {
                    event.story.content = window.storyblok.addComments(event.story.content, event.story.id)
                    window.storyblok.resolveRelations(event.story, ['featured-articles.articles'], () => {
                        setStory(event.story)
                    })
                }
            })
        }
    }, [])

    return [story, setStory];

}

export default useStoryblokEditor;