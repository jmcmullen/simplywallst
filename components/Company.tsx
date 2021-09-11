import React from "react";
import Router from "next/router";

export type CompanyProps = {
  id: string;
  name: string;
  ticker_symbol: String;
  exchange_symbol: String;
  date_generated: Date;
  security_name: String;
  exchange_country_iso: String;
  listing_currency_iso: String;
  canonical_url: String;
  unique_symbol_slug: String;
  score_id: number;
};

const Post: React.FC<{ company: CompanyProps }> = ({ company }) => {
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${company.id}`)}>
      <h2>{company.name}</h2>
      <code>{JSON.stringify(company)}</code>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
