// 24x24 icons; filled ones use currentColor fill, line ones use currentColor stroke.
const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

function Svg({ size = 24, children, ...rest }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            {...rest}
        >
            {children}
        </svg>
    );
}

export const CubeIcon = (p) => (
    <Svg {...p}>
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
    </Svg>
);

export const SphereIcon = (p) => (
    <Svg {...p}>
        <circle cx="12" cy="12" r="9" fill="currentColor" />
    </Svg>
);

export const ConeIcon = (p) => (
    <Svg {...p}>
        <path d="M12 3 22 20H2Z" fill="currentColor" strokeLinejoin="round" />
    </Svg>
);

export const CylinderIcon = (p) => (
    <Svg {...p}>
        <path
            d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0 1.66-3.58 3-8 3S4 7.66 4 6Z"
            fill="currentColor"
        />
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="currentColor" opacity="0.55" />
    </Svg>
);

export const HexagonIcon = (p) => (
    <Svg {...p}>
        <path d="M12 2 20.5 7v10L12 22 3.5 17V7Z" fill="currentColor" />
    </Svg>
);

export const HelixIcon = (p) => (
    <Svg {...p}>
        <g {...stroke}>
            <path d="M7 3c0 5 10 5 10 9s-10 4-10 9" />
            <path d="M17 3c0 5-10 5-10 9s10 4 10 9" />
        </g>
    </Svg>
);

export const FractalIcon = (p) => (
    <Svg {...p}>
        <g {...stroke}>
            <path d="M12 21V11" />
            <path d="M12 11 6 5" />
            <path d="M12 11l6-6" />
            <path d="M6 5V2" />
            <path d="M6 5H3" />
            <path d="M18 5V2" />
            <path d="M18 5h3" />
        </g>
    </Svg>
);

export const SpiralIcon = (p) => (
    <Svg {...p}>
        <path
            d="M12 12a1 1 0 0 1 2 0a3 3 0 0 1-6 0a5 5 0 0 1 10 0a7 7 0 0 1-14 0"
            {...stroke}
        />
    </Svg>
);

export const TessellationIcon = (p) => (
    <Svg {...p}>
        <g fill="currentColor">
            <rect x="3" y="3" width="8" height="8" rx="1" />
            <rect x="13" y="3" width="8" height="8" rx="1" opacity="0.55" />
            <rect x="3" y="13" width="8" height="8" rx="1" opacity="0.55" />
            <rect x="13" y="13" width="8" height="8" rx="1" />
        </g>
    </Svg>
);

export const StripeIcon = (p) => (
    <Svg {...p}>
        <g fill="currentColor">
            <rect x="3" y="4" width="18" height="3.5" rx="1" />
            <rect x="3" y="10.25" width="18" height="3.5" rx="1" />
            <rect x="3" y="16.5" width="18" height="3.5" rx="1" />
        </g>
    </Svg>
);

export const WaveIcon = (p) => (
    <Svg {...p}>
        <g {...stroke}>
            <path d="M2 9q2.5-4 5 0t5 0t5 0t5 0" />
            <path d="M2 16q2.5-4 5 0t5 0t5 0t5 0" />
        </g>
    </Svg>
);

export const SpotIcon = (p) => (
    <Svg {...p}>
        <g fill="currentColor">
            <circle cx="7" cy="7" r="3.5" />
            <circle cx="17" cy="8" r="2.5" />
            <circle cx="9" cy="17" r="2.5" />
            <circle cx="17.5" cy="16.5" r="3.5" />
        </g>
    </Svg>
);

export const categoryIcons = {
    Cubes: CubeIcon,
    Spheres: SphereIcon,
    "Pyramid, Cones, Triangles": ConeIcon,
    Cylinders: CylinderIcon,
    "Hexagonal Prisms": HexagonIcon,
    "Helices and 3D Spirals": HelixIcon,
    "Fractals and Branching (2D)": FractalIcon,
    "Spirals (2D)": SpiralIcon,
    "Tessellations and Voronoi Patterns": TessellationIcon,
    "Stripes and Bands": StripeIcon,
    "Waves and Meanders": WaveIcon,
    "Spots and Rosettes": SpotIcon,
};
