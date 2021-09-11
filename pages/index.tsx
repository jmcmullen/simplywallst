import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Company, { CompanyProps } from "../components/Company";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const companies = await prisma.swsCompany.findMany();
  return { props: { companies } };
};

type Props = {
  companies: CompanyProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.companies.map((company) => (
            <div key={company.id} className="post">
              <Company company={company} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
