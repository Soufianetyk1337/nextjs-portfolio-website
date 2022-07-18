import {
  DiReact,
  DiNodejs,
  DiHtml5,
  DiJsBadge,
  DiCss3,
  DiDocker,
  DiGit,
  DiVisualstudio,
  DiMongodb,
} from 'react-icons/di';
import {
  SiMaterialui,
  SiRedux,
  SiExpress, SiSwagger,
} from 'react-icons/si';

export const githubProjects = [{
  image: {
    src: '/images/cryptosnews_app.jpg',
    alt: 'Crypronews website image',
    width: 270,
    height: 180,
    layout: 'responsive',
  },
  projectType: 'Front End',
  title: 'Crypto News App',
  description: 'Cryptocurrencies app that keeps you update with prices and news of every coin and top exchanges website so you can start trading',
  tags: [
    {
      name: 'React',
      link: 'https://beta.reactjs.org/',
    }, {
      name: 'Material-ui',
      link: 'https://mui.com/',
    },
    {
      name: 'ChartJS',
      link: 'https://www.chartjs.org/',
    },
    {
      name: 'Redux-toolkit',
      link: 'https://redux-toolkit.js.org/',
    },
  ],
  source: 'https://github.com/Soufianetyk1337/cryptocurrency-app-with-react-redux-toolkit',
  link: 'https://cryptosnews.vercel.app/',
  id: 0,
},
{
  image: {
    src: '/images/hpo-tv.jpg',
    alt: 'Crypronews website image',
    width: 270,
    height: 180,
    layout: 'responsive',
  },
  projectType: 'Front End',
  title: 'Entertainment Web App',
  description: 'This is a multi-page front end solution to the Frontend Mentor Entertainment web app challenge design to code.',
  tags: [
    {
      name: 'React',
      link: 'https://beta.reactjs.org/',
    }, {
      name: 'Sass',
      link: 'https://sass-lang.com/',
    },
    {
      name: 'Vite',
      link: 'https://vitejs.dev/',
    },
    {
      name: 'Context API',
      link: 'https://reactjs.org/docs/context.html',
    },
  ],
  source: 'https://github.com/Soufianetyk1337/Entertainment-web-app',
  link: 'https://hpo-tv.vercel.app/',
  id: 1,
},
{
  image: {
    src: '/images/express-restapi-docs.jpg',
    alt: 'express rest api iamge',
    width: 270,
    height: 180,
    layout: 'responsive',
  },
  projectType: 'Back End',
  title: 'Express REST API',
  description: 'REST API for users that offers a lot of functionalities like login, reset password, sessions, and rate-limiting to prevent DDosing',
  tags: [
    {
      name: 'Express',
      link: 'https://expressjs.com/',
    },
    {
      name: 'MongoDB',
      link: 'https://www.mongodb.com/',
    }, {
      name: 'Redis',
      link: 'https://redis.io/',
    },
    {
      name: 'Docker',
      link: 'https://www.docker.com/',
    },
    {
      name: 'Nginx',
      link: 'https://www.nginx.com/',
    }, {
      name: 'Swagger',
      link: 'https://swagger.io/',
    },
  ],
  source: 'https://github.com/Soufianetyk1337/react-graphql-firebase-ecommerce-store',
  link: 'https://express-restapi.xyz/',
  id: 2,
},
{
  image: {
    src: '/images/Ecommerce_App.jpg',
    alt: 'Ecommerce website image',
    width: 270,
    height: 180,
    layout: 'responsive',
  },
  projectType: 'Full Stack',
  title: 'Ecommerce Store',
  description: 'Ecommerce store built from scratch where you can shop items by category and add them to your cart and perform payments ',
  tags: [
    {
      name: 'React',
      link: 'https://beta.reactjs.org/',
    },
    {
      name: 'Firebase',
      link: 'https://firebase.google.com/',
    }, {
      name: 'Stripe',
      link: 'https://stripe.com/',
    },
    {
      name: 'Redux',
      link: 'https://redux.js.org/',
    },
    {
      name: 'Redux-saga',
      link: 'https://redux-saga.js.org/',
    }, {
      name: 'Formik',
      link: 'https://formik.org/',
    },
  ],
  source: 'https://github.com/Soufianetyk1337/REST-API-with-NodeJS-Express-MongoDB',
  link: '',
  id: 3,
},
];
const styles = {
  background: '#fff',
  color: '#3E0E12',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
};

export const TechnologiesAndTools = [

  {
    Name: 'HTML5',
    Badge: (<DiHtml5
      size="3rem"
      style={
        styles
      }
    />),
  },
  {
    Name: 'CSS3',
    Badge: <DiCss3
      size="3rem"
      style={
        styles
      }
    />,
  },
  {
    Name: 'JavaScript',
    Badge: <DiJsBadge
      size="3rem"
      style={
        styles
      }
    />,
  },

  {
    Name: 'React',
    Badge: (<DiReact
      size="3rem"
      style={
        styles
      }
    />
    ),
  },
  {
    Name: 'Redux',
    Badge: <SiRedux
      size="3rem"
      style={
        styles
      }
    />,
  },
  {
    Name: 'Material-ui',
    Badge: <SiMaterialui
      size="3rem"
      style={
        styles
      }
    />,
  },
  {
    Name: 'NodeJS',
    Badge: (<DiNodejs
      size="3rem"
      style={
        styles
      }
    />),
  },
  {
    Name: 'Express',
    Badge: (<SiExpress
      size="3rem"
      style={
        styles
      }
    />),
  },
  {
    Name: 'MongoDB',
    Badge: (<DiMongodb
      size="3rem"
      style={
        styles
      }
    />),
  },
  {
    Name: 'Docker',
    Badge: <DiDocker
      size="3rem"
      style={
        styles
      }
    />,
  },

  {
    Name: 'Git',
    Badge: <DiGit
      size="3rem"
      style={
        styles
      }
    />,
  },
  {
    Name: 'VSCode',
    Badge: <DiVisualstudio
      size="3rem"
      style={
        styles
      }
    />,
  },
  {
    Name: 'Swagger',
    Badge: (<SiSwagger
      size="3rem"
      style={
        styles
      }
    />),
  },
];
