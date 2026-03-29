"use client";

import {
  Heading,
  Text,
  Column,
  Badge,
  Row,
  Flex,
  Logo,
  Line,
  LetterFx,
  Button,
  ThemeSwitcher,
  AutoScroll,
  Fade,
  Media,
  SmartLink,
  IconButton,
  NavIcon,
  Mask,
  MatrixFx,
} from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";

import {
  Jacquard_12_Charted,
  Redacted_Script,
  Bitcount_Prop_Single,
  Donegal_One,
  Questrial,
} from "next/font/google";

//init
const jacquard = Jacquard_12_Charted({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const redacted = Redacted_Script({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const bitcount = Bitcount_Prop_Single({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const donegal = Donegal_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const questrial = Questrial({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
import {
  House,
  ArrowUp,
  ArrowBendRightUpIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ThreadsLogoIcon,
} from "@phosphor-icons/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  return (
    <Column
      fillWidth
      style={{ minHeight: "100svh" }}
      overflow="hidden"
      minWidth={"100vw"}
      paddingX={"xs"}
      center
      background="neutral-medium"
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <Column
        maxWidth="m"
        fillWidth
        fillHeight
        style={{ minHeight: "100svh" }}
        vertical="between"
        // borderX="neutral-alpha-weak"
        id="mainContainer"
      >
        <Row
          fillWidth
          paddingX={"l"}
          horizontal="between"
          vertical="center"
          paddingY={1}
          // borderBottom="neutral-alpha-weak"
        >
          <Row center gap="m">
            {" "}
            <Row center gap="s">
              <Media
                src="/logo.svg"
                alt="Spojt"
                width={1.5}
                height={1.5}
                light
              />
              <Media
                src="/logo.svg"
                alt="Spojt"
                width={1.5}
                height={1.5}
                dark
                className="invertMax"
              />

              <Text variant="heading-default-xl" onBackground="neutral-strong">
                <span className={bitcount.className}>Spojt</span>
              </Text>
            </Row>
            <Row center gap="m" id="navLinks">
              <SmartLink href="#">
                <Text variant="code-default-xs">
                  <b>DOCS</b>
                </Text>
              </SmartLink>{" "}
              <SmartLink href="#">
                <Text variant="code-default-xs">
                  <b>ABOUT</b>
                </Text>
              </SmartLink>
              <SmartLink href="#">
                <Text variant="code-default-xs">
                  <b>COMMUNITY</b>
                </Text>
              </SmartLink>
              <SmartLink href="#">
                <Text variant="code-default-xs">
                  <b>FAQ</b>
                </Text>
              </SmartLink>
            </Row>
          </Row>
          <Row center gap={"m"} id="navButtonsContainer">
            {" "}
            <ThemeSwitcher id="themeSwitcher" />
            <Button
              variant="secondary"
              size="s"
              id="navButton"
              href="https://github.com/basalt3"
            >
              <Text variant="label-default-s">
                <Row gap="0" center>
                  <Media
                    src="/trademarks/b3.png"
                    alt="BASALT3"
                    width={1.5}
                    height={1.5}
                    light
                  />
                  <Media
                    src="/trademarks/b3.png"
                    alt="BASALT3"
                    width={1.5}
                    height={1.5}
                    dark
                    className="invertMax"
                  />
                  BASALT3&nbsp;&nbsp;
                </Row>
              </Text>
            </Button>{" "}
            <Button
              size="s"
              id="navButton"
              href="https://github.com/basalt3/spojt"
            >
              <Text variant="label-default-s">
                <Row gap="xs" center>
                  GET STARTED
                </Row>
              </Text>
            </Button>
            <NavIcon id="navIcon" />
          </Row>{" "}
        </Row>
        <Row
          fillWidth
          paddingX={"l"}
          paddingY={"l"}
          fillHeight
          id="heroRow"
          // borderY="neutral-alpha-weak"
        >
          <Flex fillWidth flex={1} center>
            <Mask maxWidth="m" x={50} y={50} radius={41} position="absolute">
              <MatrixFx
                size={1.5}
                spacing={6}
                fps={90}
                colors={["brand-solid-medium"]}
                flicker
                opacity={80}
              />
            </Mask>
            <Text
              variant="display-default-l"
              onBackground="neutral-strong"
              className={questrial.className}
              id="heroTextLeft"
            >
              The <span>new</span> Atomic UI
              <span className={bitcount.className}> Registry</span>.
            </Text>
          </Flex>
          <Flex
            direction="column"
            fillWidth
            flex={1}
            center
            id="heroRightContainer"
          >
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              className="lh"
              id="heroTextRight"
            >
              A high-contrast, minimalist foundation for building and
              distributing{" "}
              <Highlighter action="underline" color="#FF9800">
                design systems
              </Highlighter>
              . Engineered for technical speed and architectural clarity.
            </Text>
            <Row
              vertical="center"
              horizontal="start"
              fillWidth
              gap={"m"}
              id="heroButtons"
            >
              <Button href="https://github.com/basalt3/spojt">
                <Text variant="label-default-s">
                  <Row gap="xs" center>
                    GET STARTED <ArrowUpRightIcon />
                  </Row>
                </Text>
              </Button>
              <Button
                variant="secondary"
                href="https://github.com/basalt3/spojt"
              >
                <Text variant="label-default-s">
                  <Row gap="xs" center>
                    LEARN MORE <ArrowUpRightIcon />
                  </Row>
                </Text>
              </Button>
            </Row>
          </Flex>
        </Row>

        <Column fillWidth fitHeight gap={2}>
          <Libraries />
          <Footer />
        </Column>
      </Column>
    </Column>
  );
}

const Libraries = () => {
  return (
    <>
      {" "}
      <Flex
        direction="row"
        fillWidth
        center
        paddingX={"l"}
        paddingY={"m"}
        id="librariesRow"
      >
        <Flex center maxWidth={8} id="librariesTextLeft">
          <Text variant="label-default-xs" onBackground="neutral-weak">
            Built using awesome libraries and stacks:
          </Text>
        </Flex>
        <Row fillWidth overflow="hidden">
          {" "}
          <Fade
            zIndex="1"
            to="right"
            fillHeight
            width="64"
            position="absolute"
            left="0"
            base="transparent"
            top="0"
          />
          <AutoScroll
            center
            speed="fast"
            opacity={70}
            id="autoScroll"
            overflow="hidden"
          >
            <Logo
              wordmark="/trademarks/shadcn.png"
              size="s"
              href="#"
              light
              className="grayscale invert"
            />

            <Logo
              wordmark="/trademarks/phosphor.png"
              size="s"
              href="#"
              light
              className="grayscale invert"
              style={{ marginTop: "1px" }}
            />
            <Logo
              wordmark="/trademarks/jsrepo.png"
              size="xs"
              href="#"
              light
              className="grayscale invert"
              style={{ marginTop: "3px" }}
            />
            <Logo
              wordmark="/trademarks/wordmark-dark.svg"
              size="s"
              href="#"
              light
              className="grayscale invert"
            />
            <Logo
              wordmark="/trademarks/tailwind.png"
              size="xs"
              href="#"
              light
              className="grayscale invert"
              style={{ marginTop: "2px" }}
            />

            <Logo
              wordmark="/trademarks/shadcn.png"
              size="s"
              href="#"
              dark
              className="grayscale invert"
            />

            <Logo
              wordmark="/trademarks/phosphor.png"
              size="s"
              href="#"
              dark
              className="grayscale invert"
              style={{ marginTop: "1px" }}
            />
            <Logo
              wordmark="/trademarks/jsrepo.png"
              size="xs"
              href="#"
              dark
              className="grayscale invert"
              style={{ marginTop: "3px" }}
            />
            <Logo
              wordmark="/trademarks/wordmark-dark.svg"
              size="s"
              href="#"
              dark
              className="grayscale invert"
            />
            <Logo
              wordmark="/trademarks/tailwind.png"
              size="xs"
              href="#"
              dark
              className="grayscale invert"
              style={{ marginTop: "2px" }}
            />
          </AutoScroll>{" "}
          <Fade
            zIndex="1"
            to="left"
            fillHeight
            width="64"
            position="absolute"
            right="0"
            top="0"
            base="transparent"
          />
        </Row>
      </Flex>
    </>
  );
};
const Footer: React.FC<React.ComponentProps<typeof Row>> = ({ ...flex }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Row
      fillWidth
      horizontal="center"
      borderTop="neutral-alpha-weak"
      s={{ direction: "column" }}
      paddingY={"xs"}
      {...flex}
    >
      <Row
        maxWidth="m"
        paddingX="l"
        gap="16"
        horizontal="between"
        vertical="center"
        id="footer"
      >
        <Text variant="label-default-xs" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4" className={bitcount.className}>
            Spojt
          </Text>
          <Text onBackground="neutral-weak">/ All rights reserved</Text>
        </Text>
        <Row gap="8">
          <IconButton
            size="s"
            variant="ghost"
            href="https://github.com/basalt3/spojt"
            icon="github"
          >
            <GithubLogoIcon />
          </IconButton>
          <IconButton
            size="s"
            variant="ghost"
            href="https://www.linkedin.com/company/basalt3/"
            icon="linkedin"
          >
            <LinkedinLogoIcon />
          </IconButton>
          <IconButton size="s" variant="ghost" href="#" icon="threads">
            <ThreadsLogoIcon />
          </IconButton>
        </Row>
      </Row>
    </Row>
  );
};
