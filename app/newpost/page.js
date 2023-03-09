'use client'
import { useState } from 'react';
import ContainerOne from '../Components/Container/ContainerOne';
import Section from '../Components/Container/Section';

export default function NewPostPage() {
    const [content, setContent] = useState('---\ntitle: "Main Title of the post"\nsubtitle: "Short description of the post"\ndate: "yyyy-mm-dd"\n---');

    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
        });
        
        if (response.ok) {
        setSuccess(true);
        } else {
        setError(await response.text());
        }
    }
    
    return (
        <Section>
        <ContainerOne>
            <div>
            <h1>Create New Post</h1>
            </div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            className='w-full border border-black'
             onChange={event => setTitle(event.target.value)} />
             <br />
             <br />
             <br />
            <textarea
            className='w-full border border-black h-80'
            value={content}
            onChange={event => setContent(event.target.value)}
            >
            </textarea>
            <button className='btn-full' type="submit">Submit</button>
        </form>
        {success && <p>Success!</p>}
        {error && <p>{error}</p>}
        </ContainerOne>
        </Section>
    );
    }


