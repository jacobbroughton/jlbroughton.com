import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "../../components/Layout";
import hljs from "highlight.js";
import projectStyles from "../../styles/Project.module.scss";
import SVGIcon from "../../components/SVGIcon";

const project = ({ frontmatter, slug, project }) => {

  marked.setOptions({
    highlight: function (code, lang) {
      if (hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    },
  });

  return (
    <Layout>
      <article className={projectStyles.project}>
        <div className={projectStyles.header}>
          <h1>{frontmatter.title}</h1>
          {frontmatter.links && (
            <div className={projectStyles["project-metadata-container"]}>
              <div className={projectStyles["links"]}>
                {frontmatter.links.map((link) => {
                  let isBackend = /.-BE$/.test(link.type);
                  let isFrontend = /.-FE$/.test(link.type);
                  return (
                    <a key={link.url} href={link.url} target="_BLANK" rel="noreferrer">
                      <SVGIcon type={link.type.replace(/-BE|-FE/, "")} />
                      {isFrontend && <span>FE</span>}
                      {isBackend && <span>BE</span>}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <section className={projectStyles.body}>
          <div dangerouslySetInnerHTML={{ __html: marked(project) }}></div>
          {/* <a className={projectStyles.viewProjectLink} href={link}>View project here</a> */}
        </section>
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("_projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Able to get params: slug now that we've gotten the static paths
export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join("_projects", slug + ".md"), "utf-8");

  const { data: frontmatter, content: project } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      project,
    },
  };
};

export default project;
