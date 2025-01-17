// npm imports
import { Header, Segment } from 'semantic-ui-react';
import Head from 'next/head';

const pageTitle = 'HelloWorld is Coming Soon!';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta property="og:title" content={pageTitle} key="ogtitle" />

        <meta property="twitter:title" content={pageTitle} key="twtitle" />
      </Head>

      <Segment>
        <Header as="h2">{pageTitle}</Header>
      </Segment>

      <Segment>
        <Header as="h2">HelloWorld is Coming Soon!</Header>
        <p>
          This is a static coming soon page. See the template{' '}
          <a href="https://github.com/karmaniverous/template-nextjs#deploying-to-vercel">
            README
          </a>{' '}
          for details on how to configure it.
        </p>

        <p>
          <a href="https://preview.template-nextjs.karmanivero.us/">
            Click here
          </a>{' '}
          to visit the Preview deployment which displays the main site.
        </p>
      </Segment>
    </>
  );
};

export default ComingSoon;
