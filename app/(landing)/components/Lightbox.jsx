"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const navButtonSx = {
    position: "absolute",
    top: "50%",
    width: 48,
    height: 48,
    bgcolor: "rgba(0,0,0,0.4)",
    transform: "translateY(-50%)",
};

// images: [{ src, alt }]
export default function Lightbox({
    images,
    index,
    title,
    caption,
    onIndexChange,
    onClose,
}) {
    const rootRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const count = images.length;

    const go = useCallback(
        (delta) => onIndexChange((index + delta + count) % count),
        [index, count, onIndexChange],
    );

    const close = useCallback(() => {
        if (document.fullscreenElement) document.exitFullscreen();
        onClose();
    }, [onClose]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") close();
            else if (count > 1 && e.key === "ArrowLeft") go(-1);
            else if (count > 1 && e.key === "ArrowRight") go(1);
        };
        const onFsChange = () =>
            setIsFullscreen(document.fullscreenElement === rootRef.current);

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        document.addEventListener("fullscreenchange", onFsChange);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
            document.removeEventListener("fullscreenchange", onFsChange);
        };
    }, [close, go, count]);

    const toggleFullscreen = () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else rootRef.current?.requestFullscreen?.();
    };

    const stop = (e) => e.stopPropagation();
    const current = images[index];

    return (
        <Box
            ref={rootRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={close}
            sx={{
                position: "fixed",
                inset: 0,
                zIndex: 1300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(8,5,2,0.95)",
                color: "#fff",
            }}
        >
            <Box
                onClick={stop}
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 1.5,
                    py: 1,
                }}
            >
                <Box
                    component="span"
                    sx={{ fontSize: "0.85rem", opacity: 0.8 }}
                >
                    {count > 1 ? `${index + 1} / ${count}` : ""}
                </Box>
                <Box>
                    <IconButton
                        color="inherit"
                        onClick={toggleFullscreen}
                        aria-label={
                            isFullscreen ? "Exit full screen" : "Full screen"
                        }
                    >
                        <FullscreenIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={close}
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>

            {count > 1 && (
                <IconButton
                    color="inherit"
                    onClick={(e) => {
                        stop(e);
                        go(-1);
                    }}
                    aria-label="Previous image"
                    sx={{ ...navButtonSx, left: 12 }}
                >
                    <ChevronLeftIcon fontSize="large" />
                </IconButton>
            )}

            <Box
                component="img"
                src={current.src}
                alt={current.alt}
                onClick={stop}
                sx={{
                    maxWidth: "100vw",
                    maxHeight: "100svh",
                    pt: 7,
                    pb: 8,
                    objectFit: "contain",
                    cursor: "default",
                }}
            />

            {count > 1 && (
                <IconButton
                    color="inherit"
                    onClick={(e) => {
                        stop(e);
                        go(1);
                    }}
                    aria-label="Next image"
                    sx={{ ...navButtonSx, right: 12 }}
                >
                    <ChevronRightIcon fontSize="large" />
                </IconButton>
            )}

            <Box
                onClick={stop}
                sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2px",
                    px: 2,
                    pt: 1.25,
                    pb: 1.75,
                    fontSize: "0.9rem",
                    textAlign: "center",
                }}
            >
                <strong>{title}</strong>
                {caption && (
                    <Box
                        component="span"
                        sx={{ fontSize: "0.78rem", opacity: 0.7 }}
                    >
                        {caption}
                    </Box>
                )}
            </Box>
        </Box>
    );
}
