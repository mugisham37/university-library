// Configuration settings for the university library system

interface Config {
  env: {
    imagekit: {
      urlEndpoint: string;
      publicKey: string;
    };
    database: {
      url: string;
    };
    auth: {
      secret: string;
    };
  };
}

const config: Config = {
  env: {
    imagekit: {
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/your-imagekit-id",
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
    },
    database: {
      url: process.env.DATABASE_URL || "",
    },
    auth: {
      secret: process.env.NEXTAUTH_SECRET || "",
    },
  },
};

export default config;
