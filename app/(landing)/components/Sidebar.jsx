"use client";
import { Box, ButtonBase, Tooltip, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { colors, inkAlpha } from "./tokens";

const COLLAPSED = 50;
const EXPANDED = 300;

function ItemTooltip({ group, item }) {
    return (
        <Box sx={{ py: 0.25 }}>
            <Typography
                sx={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.14em",
                    lineHeight: 1.2,
                    textTransform: "uppercase",
                    color: colors.sidebar,
                }}
            >
                {group.label}
            </Typography>
            <Typography
                sx={{ fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.35 }}
            >
                {item.name}
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", opacity: 0.65 }}>
                {item.entries.length} entries
            </Typography>
        </Box>
    );
}

export default function Sidebar({
    groups,
    activeId,
    expanded,
    onToggle,
    onSelect,
}) {
    return (
        <Box
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 20,
                flex: "none",
                alignSelf: "flex-start",
                height: "100svh",
                width: { xs: COLLAPSED, md: expanded ? EXPANDED : COLLAPSED },
                transition: "width 0.2s ease",
            }}
        >
            {/* Below md the DOM order is flipped visually: toggle at the bottom, first items just above it. */}
            <Box
                component="nav"
                aria-label="Categories"
                sx={{
                    position: { xs: "absolute", md: "static" },
                    top: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "column" },
                    height: "100%",
                    width: {
                        xs: expanded ? "min(300px, 85vw)" : COLLAPSED,
                        md: "100%",
                    },
                    overflowX: "hidden",
                    overflowY: "auto",
                    pb: { xs: 0, md: 1.5 },
                    bgcolor: colors.sidebar,
                    color: colors.ink,
                    boxShadow: {
                        xs: expanded ? "4px 0 16px rgba(0,0,0,0.3)" : "none",
                        md: "none",
                    },
                    transition: "width 0.2s ease",
                }}
            >
                <ButtonBase
                    onClick={onToggle}
                    aria-expanded={expanded}
                    aria-label={expanded ? "Collapse menu" : "Expand menu"}
                    sx={{
                        position: { xs: "sticky", md: "static" },
                        bottom: 0,
                        zIndex: 1,
                        flex: "none",
                        width: COLLAPSED,
                        height: COLLAPSED,
                        bgcolor: colors.sidebar,
                        color: "inherit",
                        "&:hover": { bgcolor: "#cf6644" },
                    }}
                >
                    {expanded ? <CloseIcon /> : <MenuIcon />}
                </ButtonBase>

                {groups.map((group) => (
                    <Box
                        key={group.label}
                        sx={{
                            display: "flex",
                            flex: "none",
                            flexDirection: { xs: "column-reverse", md: "column" },
                        }}
                    >
                        <Box
                            sx={{
                                order: { xs: 1, md: 0 },
                                height: 28,
                                px: 2,
                                pt: 1,
                                fontSize: "0.7rem",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                whiteSpace: "nowrap",
                                opacity: 0.75,
                            }}
                        >
                            {expanded ? (
                                group.label
                            ) : (
                                <Box
                                    component="span"
                                    sx={{
                                        display: "block",
                                        height: "1px",
                                        mx: 1.5,
                                        mt: 1,
                                        bgcolor: inkAlpha(0.35),
                                    }}
                                />
                            )}
                        </Box>

                        <Box
                            component="ul"
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column-reverse", md: "column" },
                                m: 0,
                                p: 0,
                                listStyle: "none",
                            }}
                        >
                            {group.items.map((item) => {
                                const Icon = item.Icon;
                                const active = item.id === activeId;

                                return (
                                    <li key={item.id}>
                                        <Tooltip
                                            title={
                                                expanded ? (
                                                    ""
                                                ) : (
                                                    <ItemTooltip
                                                        group={group}
                                                        item={item}
                                                    />
                                                )
                                            }
                                            placement="right"
                                            arrow
                                            enterDelay={80}
                                            slotProps={{
                                                popper: {
                                                    modifiers: [
                                                        {
                                                            name: "offset",
                                                            options: {
                                                                offset: [0, 4],
                                                            },
                                                        },
                                                    ],
                                                },
                                                tooltip: {
                                                    sx: {
                                                        px: 1.75,
                                                        py: 1,
                                                        maxWidth: 260,
                                                        borderRadius: 1.5,
                                                        bgcolor: colors.ink,
                                                        color: colors.paper,
                                                        border: `1px solid ${inkAlpha(0.6)}`,
                                                        boxShadow:
                                                            "0 8px 24px rgba(42,21,8,0.35)",
                                                    },
                                                },
                                                arrow: {
                                                    sx: { color: colors.ink },
                                                },
                                            }}
                                        >
                                            <ButtonBase
                                                onClick={() => onSelect(item.id)}
                                                aria-current={
                                                    active ? "page" : undefined
                                                }
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    width: "100%",
                                                    height: 42,
                                                    borderLeft: "3px solid",
                                                    borderLeftColor: active
                                                        ? colors.paper
                                                        : "transparent",
                                                    bgcolor: active
                                                        ? colors.ink
                                                        : "transparent",
                                                    color: active
                                                        ? colors.paper
                                                        : "inherit",
                                                    fontWeight: active ? 600 : 400,
                                                    textAlign: "left",
                                                    whiteSpace: "nowrap",
                                                    "&:hover": {
                                                        bgcolor: active
                                                            ? colors.ink
                                                            : inkAlpha(0.12),
                                                    },
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        display: "flex",
                                                        flex: "none",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        // 50px minus the 3px active border
                                                        width: COLLAPSED - 3,
                                                    }}
                                                >
                                                    {Icon && <Icon size={22} />}
                                                </Box>
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        overflow: "hidden",
                                                        pr: 2,
                                                        textOverflow: "ellipsis",
                                                        opacity: expanded ? 1 : 0,
                                                        transition:
                                                            "opacity 0.15s ease",
                                                    }}
                                                >
                                                    {item.name}
                                                </Box>
                                            </ButtonBase>
                                        </Tooltip>
                                    </li>
                                );
                            })}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
