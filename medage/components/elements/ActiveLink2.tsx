// react
import React, { FC } from "react";
// next
import Link from "next/link";
// next
import { useRouter } from "next/router";

export interface IActiveLink2 {
  href: string;
  children: any;
}

const ActiveLink2: FC<IActiveLink2> = ({ href, children }) => {
  const router = useRouter();
  let className = children.props.className || "";
  const path = href.split("/");

  if (router.pathname.includes(path[path.length - 1])) {
    className = `${className} text-primary`;
  }
  return <Link href={href}>{React.cloneElement(children, { className, href })}</Link>;
};

export default ActiveLink2;
