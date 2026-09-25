"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import entries from "./entries";
import {
    Typography,
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from "@mui/material";
import Image from "next/image";

import logo from "@/app/icon.png";

export default function Landing() {
    // const [section, setSection] = useState(false);
    const searchParams = useSearchParams();
    const searchParamsObject = Object.fromEntries(searchParams.entries());
    const { section } = searchParamsObject;

    return (
        <Box
            as="section"
            sx={{ pb: 10 }}
            className="section-shell final-cta"
            id="apply"
        >
            <Box sx={{ mb: 5 }}>
                <p
                    className="eyebrow"
                    style={{ position: "relative" }}
                >
                    <Image
                        src={logo}
                        alt="In Nature Logo"
                        className="pulse-dot"
                        style={{
                            // position: "absolute",
                            // left: "0",
                            width: "24px",
                            height: "24px",
                        }}
                    />
                    {/* <span className="pulse-dot" /> */}
                    <span>Welcome to </span>
                    <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                        In Nature
                    </span>
                </p>

                <Typography variant="h1">Shapes and Patterns</Typography>
                <Typography
                    variant="h2"
                    sx={{ mb: 5 }}
                >
                    How They Appear in Nature
                </Typography>

                {/* <Link
          href={{
            query: { section: "shapes" }
          }}
          className="primary-button light-button"
          style={{ margin: "0rem 0.25rem" }}
        // href="mailto:hello@numa.care"
        >
          Shapes
        </Link>
        <Link
          href={{
            query: { section: "patterns" }
          }}
          className="primary-button light-button"
          style={{ margin: "0rem 0.25rem" }}
        // href="mailto:hello@numa.care"
        >
          Patterns
        </Link> */}
            </Box>

            {/* {!section &&
        <p className="cta-note">
          A website & art project showcasing natures shapes and patterns by ArticlesJoey.
        </p>
      } */}

            <Box
                sx={{ mb: 0 }}
                className=""
            >
                {[...entries?.shapes, ...entries?.patterns].map(
                    (item, index) => (
                        <Box
                            key={index}
                            sx={{ mb: 3 }}
                        >
                            <Typography
                                variant="h3"
                                gutterBottom
                            >
                                {item.name}
                            </Typography>

                            {/* <div>
                {item.items?.map((subItem, subIndex) => (
                  <div key={subIndex}>

                    <AspectRatio sx={{ width: 300 }}>
                      <Typography level="h2" component="div">
                        16/9
                      </Typography>
                    </AspectRatio>

                    <div>{subItem.name}</div>

                  </div>
                ))}
              </div> */}

                            <ImageList
                                sx={{
                                    maxWidth: 1200,
                                    mx: "auto",
                                    gridTemplateColumns: {
                                        xs: "repeat(1, 1fr) !important",
                                        sm: "repeat(2, 1fr) !important",
                                        md: "repeat(4, 1fr) !important",
                                    },
                                }}
                            >
                                {item.items.map((item, item_index) => (
                                    <ImageListItem
                                        key={item_index}
                                        sx={{}}
                                    >
                                        <img
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            alt={item.name}
                                            loading="lazy"
                                            style={{
                                                aspectRatio: "1 / 1",
                                            }}
                                        />
                                        <ImageListItemBar
                                            title={item.name}
                                            subtitle={
                                                <Link
                                                    href={
                                                        item.author_link || "#"
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span>
                                                        by:{" "}
                                                        {item.author ||
                                                            "Unknown"}
                                                    </span>
                                                </Link>
                                            }
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                    ),
                )}
            </Box>

            <footer>
                <a
                    className="brand"
                    href="#top"
                >
                    {process.env.NEXT_PUBLIC_BRAND}
                </a>

                <a
                    className="brand"
                    href="https://github.com/Articles-Joey"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>By: ArticlesJoey</span>
                </a>
            </footer>
        </Box>
    );
}
