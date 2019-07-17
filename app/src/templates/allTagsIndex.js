import React from 'react';
import { Link } from 'gatsby';
import { Layout, Content } from '../components';

const AllTagsTemplate = ({ pageContext }) => {
  const { tags } = pageContext;
  return (
    <Layout>
      <Content>
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`/tags/${tagName}`}>{tagName}</Link>
              </li>
            );
          })}
        </ul>
      </Content>
    </Layout>
  );
};

export default AllTagsTemplate;
