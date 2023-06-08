import { Post, PostType } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://i.pinimg.com/564x/57/40/0c/57400c4761ae8ae16780773ea72491ce.jpg",
      name: "Rei Ayanami",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Eai galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto aqui inspirado em um tipo de rede social. É um projeto que fiz usando ReactJS / ReactTS. O nome do projeto é Ignite 🚀",
      },
      { type: "link", content: "https://github.com/0kira-vgl" },
    ],
    publishedAt: new Date("2023-06-5 08:13:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://i.pinimg.com/564x/25/d4/9f/25d49f3c4c42d13f45e986cd98b52506.jpg",
      name: "Shinji Ikari",
      role: "Piloto EVA",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Sinceramente queria entender o por que dela me odiar tanto! Asuka, suas palavras são apenas um reflexo da sua própria amargura e arrogância. Você não faz ideia do que eu passo como piloto de Eva. Enquanto você se vangloria, eu enfrento batalhas internas e luto para proteger aqueles que amo. Não subestime minha força ou minha determinação. Eu vou provar a todos, inclusive a você, que sou mais do que suas provocações mesquinhas.  😡 ",
      },
    ],
    publishedAt: new Date("2023-05-10 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl:
        "https://i.pinimg.com/564x/82/84/89/8284893fa1876be0005a0d6d7a7a2799.jpg",
      name: "Asuka Langley",
      role: "Piloto EVA",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Ei, Shinji! Já viu algum piloto de Eva com tanta falta de habilidade quanto você? Acho que seu melhor talento é fugir das responsabilidades e choramingar pelos cantos. Ah, desculpe, esqueci que isso não é um talento. É só patético mesmo.",
      },
    ],
    publishedAt: new Date("2023-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
