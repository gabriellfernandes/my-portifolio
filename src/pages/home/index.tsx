// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
import { ProjectImg } from "@/components/Project/ProjectImg";

export const Home = (): JSX.Element => {
  const githubUrl = `https://github.com/${userData.githubUser}`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <Text type="heading3" color="grey4">Oi 👋 eu sou o Gabriel</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey4">
              Full Stack{" "}
              Developer{" "}
            </Text>
            <Flex>
              <Text type="body1" color="grey4">
                Tenho 20 anos sou desenvolvedor Full stack{" "}
                com 1 ano de experiência trabalhando {" "}
                como freelancer
              </Text>
            </Flex>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver Projetos
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={githubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text
                as="h2"
                type="heading4"
                color="grey4"
                style={{
                  marginBottom: "20px",
                }}
              >
                Meus Projetos
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <ProjectImg />
            </ProjectsAreaContent>

            <ProjectsAreaSocialMediaMessage>
              <Text
                as="h2"
                type="heading4"
                color="grey4"
                style={{
                  marginTop: "40px",
                }}
              >
                Projetos Github
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
