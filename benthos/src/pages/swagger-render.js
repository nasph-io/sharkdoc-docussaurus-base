import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import SwaggerRenderer from '../components/SwaggerRenderer.js'


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bem vindo(a) a ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">      
      <main>
          <SwaggerRenderer/>
      </main>
    </Layout>
  );
}
