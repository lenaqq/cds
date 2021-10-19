import * as React from "react";
import Layout from "../../Components/layout";
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPostPage = ( { data}) => {
    console.log(data);

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    );
};

export const query = graphql`
query ($id:String) {
  mdx(id: {eq: $id}) {
    id
    frontmatter {
      date
      title
    }
    body
  }
}
`
export default BlogPostPage;