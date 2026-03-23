"use client";
import React from "react";
import Block from "./_Builtin/Block";
import BlockContainer from "./_Builtin/BlockContainer";
import Heading from "./_Builtin/Heading";
import Link from "./_Builtin/Link";
import Paragraph from "./_Builtin/Paragraph";
import Section from "./_Builtin/Section";
import * as _utils from "./utils";
import _styles from "./Sss.module.css";

export function Sss({
  as: _Component = Section,

  link = {
    href: "#",
  },

  text = "Handcrafted Swiss timepieces that define luxury and precision. Each watch tells a unique story of craftsmanship.",
  text2 = "This is some text inside of a div block.",
  title = "Timeless Elegance",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-hero")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <BlockContainer
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <Block className={_utils.cx(_styles, "grid-2col")} tag="div">
          <Block tag="div">
            <Heading className={_utils.cx(_styles, "heading-xl")} tag="h1">
              {title}
            </Heading>
            <Paragraph className={_utils.cx(_styles, "text-body")}>
              {text}
            </Paragraph>
            <Link
              block="inline"
              button={false}
              className={_utils.cx(_styles, "button-outline")}
              options={link}
            >
              <Block tag="div">{text2}</Block>
            </Link>
          </Block>
        </Block>
      </BlockContainer>
    </_Component>
  );
}
