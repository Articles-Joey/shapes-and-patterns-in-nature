const shapes = [
    {
        name: "Cubes",
        items: [
            {
                name: "Wombat Poop",
                author: "Patricia J. Yang et al.",
                img: "img/shapes/Cubes/wombat.webp",
            },
            {
                name: "Pyrite (Fool's Gold)",
                author: "CarlesMillan",
                author_link: "CarlesMillan",
                img: "img/shapes/Cubes/pyrite.webp",
            },
            {
                name: "Salt crystals (Halite)",
                author: "",
                img: "img/shapes/Cubes/halite.webp",
            },
            {
                name: "Fluorite crystals",
                author: "Marie-Lan Taÿ Pamart",
                author_link:
                    "https://en.wikipedia.org/wiki/Fluorite#/media/File:Fluorite_Le_Beix_Min%C3%A9raux_SU_n02.jpg",
                img: "img/shapes/Cubes/fluorite.jpg",
            },
            {
                name: "Bismuth hopper crystals",
                author: "",
                img: "img/shapes/Cubes/Bismuth.webp",
            },
            {
                name: "Galena (Lead ore) crystals",
                author: "",
                img: "img/shapes/Cubes/Galena.png",
            },
            {
                name: "Boleite crystals",
                author: "",
                img: "img/shapes/Cubes/Boleite Crystals.jpg",
            },
            {
                name: "Yellow Boxfish",
                author: "",
                img: "img/shapes/Cubes/Yellow Boxfish.jpg",
            },
        ],
    },
    {
        name: "Spheres",
        items: [
            {
                name: "Planets, Asteroids, Moons, and Stars",
                img: "img/shapes/Spheres/PlanetsAsteroidsMoonsStars.jpg",
            },
            {
                name: "Bubbles",
                img: "img/shapes/Spheres/bubbles.jpg",
            },
            {
                name: "Dandelion",
                author: "Aleksandr Ledogorov",
                author_link:
                    "https://unsplash.com/photos/person-holding-dandelion-flower-G-JJy-Yv_dA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
                img: "img/shapes/Spheres/Dandelion.jpg",
            },
            {
                name: "Pearls",
                img: "img/shapes/Spheres/Pearls.jpg",
            },
            {
                name: "Water droplets / Dew drops",
                img: "img/shapes/Spheres/Water Droplets.jpg",
            },
            {
                name: "Sea urchin shells (tests)",
                img: "img/shapes/Spheres/Sea urchin shells.jpg",
            },
            {
                name: "Fish eggs (Roe)",
                img: "img/shapes/Spheres/Fish Eggs.jpg",
            },
            {
                name: "Eyeballs",
                img: "img/shapes/Spheres/Eyeballs.webp",
            },
        ],
    },
    {
        name: "Pyramid, Cones, Triangles",
        items: [
            {
                name: "Mountains",
                img: "img/shapes/Pyramid-Cones-Triangles/Mountains.webp",
            },
            {
                name: "Triangle Tree (Evergreens/Conifers)",
                img: "img/shapes/Pyramid-Cones-Triangles/Triangle Tree.webp",
            },
            {
                name: "Tree Fork",
                img: "img/shapes/Pyramid-Cones-Triangles/Tree Fork.webp",
            },
            {
                name: "Volcanoes (Cinder cones and Stratovolcanoes)",
                img: "img/shapes/Pyramid-Cones-Triangles/Volcanoes.webp",
            },
            {
                name: "Pinecones",
                img: "img/shapes/Pyramid-Cones-Triangles/Pinecones.webp",
            },
            {
                name: "Barnacles",
                img: "img/shapes/Pyramid-Cones-Triangles/Barnacles.webp",
            },
            {
                name: "Shark teeth",
                img: "img/shapes/Pyramid-Cones-Triangles/Shark teeth.webp",
            },
            {
                name: "Stalactites & Stalagmites",
                img: "img/shapes/Pyramid-Cones-Triangles/Stalactites & Stalagmites.webp",
            },
        ],
    },
    {
        name: "Cylinders",
        items: [
            {
                name: "Tree Trunk",
                img: "img/shapes/Cylinders/Tree Trunk.webp",
            },
            {
                name: "Bamboo stalks",
                img: "img/shapes/Cylinders/Bamboo.webp",
            },
            {
                name: "Earthworms",
                img: "img/shapes/Cylinders/Earthworms.webp",
            },
            {
                name: "Plant stems and Giant Kelp stipes",
                img: "img/shapes/Cylinders/Plant Stems.webp",
            },
            {
                name: "Human hair shafts",
                img: "img/shapes/Cylinders/Human Hair.webp",
            },
            {
                name: "Coral pipes",
                img: "img/shapes/Cylinders/Coral pipes.webp",
            },
            {
                name: "Fulgurites (Lightning tubes)",
                img: "img/shapes/Cylinders/Fulgurites.webp",
            },
            {
                name: "Tube Sponges",
                img: "img/shapes/Cylinders/Tube Sponges.webp",
            },
        ],
    },
    {
        name: "Hexagonal Prisms",
        items: [
            {
                name: "Basalt columns (e.g., Giant's Causeway)",
                img: "https://placehold.net/9.png",
            },
            {
                name: "Quartz crystals",
                img: "https://placehold.net/9.png",
            },
            {
                name: "Snowflakes (3D columnar type)",
                img: "https://placehold.net/9.png",
            },
        ],
    },
    {
        name: "Helices and 3D Spirals",
        items: [
            {
                name: "DNA molecules (Double helix)",
                img: "https://placehold.net/10.png",
            },
            {
                name: "Snail and Conch shells",
                img: "https://placehold.net/10.png",
            },
            {
                name: "Ram and Bighorn sheep horns",
                img: "https://placehold.net/10.png",
            },
            {
                name: "Morning glory vines",
                img: "https://placehold.net/10.png",
            },
            {
                name: "Tornadoes and Waterspouts",
                img: "https://placehold.net/10.png",
            },
        ],
    },
];

const patterns = [
    {
        name: "Fractals and Branching (2D)",
        items: [
            {
                name: "Fern fronds",
                author: "Natalie Kinnear",
                author_link: "https://unsplash.com/@nataliekinnear",
                img: "img/patterns/natalie-kinnear-roeWtas_V5c-unsplash.jpg",
            },
            {
                name: "Frost patterns on a window",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Leaf vein networks",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Lightning bolts",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "River deltas viewed from above",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Lichtenberg figures (electrical branching)",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
        ],
    },
    {
        name: "Spirals (2D)",
        items: [
            {
                name: "Sunflower seed arrangements (Fibonacci spiral)",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Hurricane and Cyclone cloud patterns",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Spiral galaxies (viewed top-down)",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Nautilus shell cross-sections",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Chameleon tails rolled up",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Pineapple scale arrangements",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
        ],
    },
    {
        name: "Tessellations and Voronoi Patterns",
        items: [
            {
                name: "Honeycomb cells (cross-section)",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Dried mud cracks",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Giraffe coat patches",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Dragonfly wings",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Turtle carapace scutes",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Snake skin scales",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
        ],
    },
    {
        name: "Stripes and Bands",
        items: [
            {
                name: "Zebra coats",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Tiger fur",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Tree rings (dendrochronology cross-sections)",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Agate stone cross-sections",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Jupiter's atmospheric bands",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
        ],
    },
    {
        name: "Waves and Meanders",
        items: [
            {
                name: "Sand dune ripples",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Brain coral surface patterns",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "River meanders on a map",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Ocean wave crests",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
        ],
    },
    {
        name: "Spots and Rosettes",
        items: [
            {
                name: "Leopard and Jaguar rosettes",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Ladybug wings",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Whale shark patterns",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
            {
                name: "Peacock feather eyespots",
                author: "",
                author_link: "",
                img: "https://placehold.net/shape-400x400.png",
            },
        ],
    },
];

const entries = {
    shapes,
    patterns,
};

export default entries;
