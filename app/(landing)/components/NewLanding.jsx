"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
    Box,
    ButtonBase,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import entries from "../../entries";
import Sidebar from "./Sidebar";
import Lightbox from "./Lightbox";
import { categoryIcons } from "./CategoryIcons";
import { colors, inkAlpha } from "./tokens";
import logo from "@/app/icon.png";

const toSrc = (path) => (/^(https?:)?\/\//.test(path) ? path : `/${path.replace(/^\//, "")}`);

// Supports `images: [...]` (strings or { src, alt }) and falls back to the single `img`.
function getImages(item) {
    const raw = item.images?.length ? item.images : [item.img];
    return raw.filter(Boolean).map((image) =>
        typeof image === "string"
            ? { src: toSrc(image), alt: item.name }
            : { src: toSrc(image.src), alt: image.alt || item.name },
    );
}

const isHttp = (url) => /^https?:\/\//.test(url || "");

const slugify = (name) =>
    name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

export default function NewLanding() {
    const groups = useMemo(
        () =>
            [
                { label: "Shapes", list: entries.shapes },
                { label: "Patterns", list: entries.patterns },
            ].map(({ label, list }) => ({
                label,
                items: list.map((category) => ({
                    id: slugify(category.name),
                    name: category.name,
                    Icon: categoryIcons[category.name],
                    entries: category.items,
                })),
            })),
        [],
    );

    const allCategories = useMemo(
        () => groups.flatMap((group) => group.items),
        [groups],
    );

    const [activeId, setActiveId] = useState(allCategories[0]?.id);
    const [expanded, setExpanded] = useState(false);
    const [lightbox, setLightbox] = useState(null);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    // Highlight the section crossing the upper part of the viewport.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (observed) => {
                const hit = observed.find((entry) => entry.isIntersecting);
                if (hit) setActiveId(hit.target.id);
            },
            { rootMargin: "0px 0px -70% 0px" },
        );
        allCategories.forEach((category) => {
            const el = document.getElementById(category.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [allCategories]);

    const selectCategory = (id) => {
        setActiveId(id);
        if (!isDesktop) setExpanded(false);
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100svh",
                bgcolor: colors.paper,
                color: colors.ink,
            }}
        >
            <Box
                aria-hidden="true"
                sx={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    backgroundImage: "url(/img/swirl-tile.svg)",
                    backgroundSize: "420px 420px",
                    opacity: 0.035,
                }}
            />

            <Sidebar
                groups={groups}
                activeId={activeId}
                expanded={expanded}
                onToggle={() => setExpanded((value) => !value)}
                onSelect={selectCategory}
            />

            <Box
                onClick={() => setExpanded(false)}
                aria-hidden="true"
                sx={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 15,
                    display: { xs: "block", md: "none" },
                    bgcolor: "rgba(0,0,0,0.6)",
                    opacity: expanded ? 1 : 0,
                    pointerEvents: expanded ? "auto" : "none",
                    transition: "opacity 0.2s ease",
                }}
            />

            <Box
                component="main"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    minWidth: 0,
                    pt: { xs: 2.5, md: 3 },
                    pb: 2,
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        width: "100%",
                    }}
                >
                    <Box
                        component="header"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            mb: 7,
                            pt: { xs: 2, md: 4 },
                            pb: { xs: 4, md: 6 },
                            textAlign: "center",
                            borderBottom: `1px solid ${inkAlpha(0.15)}`,
                        }}
                    >
                        <Image
                            src={logo}
                            alt="In Nature logo"
                            priority
                            style={{
                                width: 96,
                                height: 96,
                                marginBottom: 20,
                            }}
                        />
                        <Typography
                            component="h1"
                            sx={{
                                fontFamily: 'Georgia, "Times New Roman", serif',
                                fontSize: "clamp(2.4rem, 7vw, 4.75rem)",
                                fontWeight: 400,
                                lineHeight: 1.05,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Shapes &amp; Patterns
                            <Box
                                component="span"
                                sx={{
                                    display: "block",
                                    mt: 0.5,
                                    fontSize: "0.6em",
                                    fontStyle: "italic",
                                    color: colors.sidebar,
                                }}
                            >
                                in Nature
                            </Box>
                        </Typography>
                        <Typography
                            sx={{
                                maxWidth: 560,
                                mt: 2.5,
                                fontSize: { xs: "0.95rem", md: "1.1rem" },
                                lineHeight: 1.6,
                                opacity: 0.8,
                            }}
                        >
                            Explore the natural occurrence and beauty of
                            shapes and patterns, and how they appear
                            throughout the universe.
                        </Typography>
                    </Box>

                    {allCategories.map((category) => (
                        <Box
                            component="section"
                            key={category.id}
                            id={category.id}
                            sx={{ mb: 6, scrollMarginTop: 16 }}
                        >
                            <Typography
                                component="h2"
                                sx={{
                                    mb: 2.5,
                                    fontFamily:
                                        'Georgia, "Times New Roman", serif',
                                    fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                    lineHeight: 1.1,
                                }}
                            >
                                {category.name}
                            </Typography>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "repeat(2, 1fr)",
                                        sm: "repeat(auto-fill, minmax(180px, 1fr))",
                                    },
                                    gap: { xs: 1.25, sm: 2 },
                                }}
                            >
                                {category.entries.map((item) => {
                                    const images = getImages(item);
                                    const hasAuthorLink = isHttp(
                                        item.author_link,
                                    );

                                    return (
                                        <Box
                                            component="figure"
                                            key={item.name}
                                            sx={{
                                                m: 0,
                                                p: "6px",
                                                border: `1px solid ${colors.ink}`,
                                                bgcolor: "#fff",
                                            }}
                                        >
                                            <ButtonBase
                                                disableRipple
                                                onClick={() =>
                                                    setLightbox({
                                                        item,
                                                        images,
                                                        index: 0,
                                                    })
                                                }
                                                aria-label={`View ${item.name}`}
                                                sx={{
                                                    position: "relative",
                                                    display: "block",
                                                    width: "100%",
                                                    aspectRatio: "1 / 1",
                                                    overflow: "hidden",
                                                    bgcolor: "#e6dfd0",
                                                    cursor: "zoom-in",
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={images[0].src}
                                                    alt={images[0].alt}
                                                    loading="lazy"
                                                    sx={{
                                                        display: "block",
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                {images.length > 1 && (
                                                    <Box
                                                        component="span"
                                                        sx={{
                                                            position: "absolute",
                                                            right: 6,
                                                            bottom: 6,
                                                            px: 1,
                                                            py: "2px",
                                                            borderRadius: 999,
                                                            bgcolor: inkAlpha(0.8),
                                                            color: "#fff",
                                                            fontSize: "0.7rem",
                                                        }}
                                                    >
                                                        {images.length} photos
                                                    </Box>
                                                )}
                                            </ButtonBase>

                                            <Box
                                                component="figcaption"
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "2px",
                                                    pt: 1,
                                                    px: "2px",
                                                    pb: "2px",
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        fontSize: "0.85rem",
                                                        fontWeight: 600,
                                                        lineHeight: 1.25,
                                                    }}
                                                >
                                                    {item.name}
                                                </Box>
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        fontSize: "0.72rem",
                                                        opacity: 0.7,
                                                        "& a": {
                                                            textDecoration:
                                                                "underline",
                                                        },
                                                    }}
                                                >
                                                    by:{" "}
                                                    {hasAuthorLink ? (
                                                        <a
                                                            href={
                                                                item.author_link
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {item.author ||
                                                                "Unknown"}
                                                        </a>
                                                    ) : (
                                                        item.author || "Unknown"
                                                    )}
                                                </Box>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                    ))}

                    <Box
                        component="footer"
                        sx={{
                            // Resets the global `footer` rule in globals.css (position: absolute).
                            position: "static",
                            inset: "auto",
                            display: "flex",
                            justifyContent: "center",
                            mt: "auto",
                            pt: 2,
                            pb: 1,
                            borderTop: `1px solid ${inkAlpha(0.15)}`,
                            fontSize: "0.8rem",
                            "& a:hover": { textDecoration: "underline" },
                        }}
                    >
                        <a
                            href="https://github.com/Articles-Joey/shapes-and-patterns-in-nature"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                            }}
                        >
                            <GitHubIcon sx={{ fontSize: "1.1rem" }} />
                            By: ArticlesJoey
                        </a>
                    </Box>
                </Container>
            </Box>

            {lightbox && (
                <Lightbox
                    images={lightbox.images}
                    index={lightbox.index}
                    title={lightbox.item.name}
                    caption={
                        lightbox.item.author
                            ? `by: ${lightbox.item.author}`
                            : ""
                    }
                    onIndexChange={(index) =>
                        setLightbox((state) => ({ ...state, index }))
                    }
                    onClose={() => setLightbox(null)}
                />
            )}
        </Box>
    );
}
