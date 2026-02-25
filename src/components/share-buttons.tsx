
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
import { SVGProps, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Instagram } from "lucide-react";

export const ShareButtons = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const shareUrl = `${siteConfig.url}${pathname}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="flex items-center space-x-2">
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
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        onClick={handleCopy}
        title="Copy Link"
      >
        {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
      </Button>
    </div>
  );
};
