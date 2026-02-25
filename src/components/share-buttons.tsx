
"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import { Instagram } from "lucide-react";

export const ShareButtons = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const shareUrl = `${siteConfig.url}${pathname}`;

  return (
    <div className="flex items-center space-x-4">
        <p className="text-lg font-semibold">Share on:</p>
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <a
        href="https://www.instagram.com/vishwasut_ayurved/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white"
      >
        <Instagram size={20} />
      </a>
    </div>
  );
};
