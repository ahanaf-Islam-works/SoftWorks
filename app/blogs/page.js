import getPostMetadata from '@/app/Components/getPostMetadata';
import PostPreview from '@/app/Components/PostPreviews/PostPreview';

import ContainerTwo from '../Components/Container/ContainerTwo';
import Section from '../Components/Container/Section';


export default function About() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
// only show five post previews. then show a button to load more.

    <Section>
    <ContainerTwo>
      {postPreviews}
    </ContainerTwo>
    </Section>
  )
}

