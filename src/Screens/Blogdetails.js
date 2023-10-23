import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blogdetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // This fetch assumes you're fetching data from the same API 
        // as in the Blog component. Modify as needed.
        fetch('https://www.pnytrainings.com/api/get_feature_posts')
            .then((response) => response.json())
            .then((data) => {
                const matchedPost = data.find(item => item.url_slug === slug);
                setPost(matchedPost);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;  // or any other loading indication
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            {/*... display other details of the post as you see fit*/}
        </div>
    );
}

export default Blogdetails;
