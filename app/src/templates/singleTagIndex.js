import React from 'react';
import { Link } from 'gatsby';
import { Layout, Content } from '../components';

const SingleTagTemplate = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  return (
    <Layout>
      <Content>
        <div>Posts about {`${tagName}`}</div>
        <div>
          <ul>
            {posts.map((post, index) => {
              return (
                <li key={index}>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Content>
    </Layout>
  );
};

export default SingleTagTemplate;
