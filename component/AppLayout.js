import PropTypes from "prop-types";
import { Menu } from "antd";
import Link from "next/link";
import Head from "next/head";

const AppLayout = ({ children, version }) => {
  return (
    <>
      <Head>
        <title>chatGPT-{version}</title>
      </Head>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">GPT-3.5</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/gpt4">GPT-4</Link>
        </Menu.Item>
      </Menu>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
