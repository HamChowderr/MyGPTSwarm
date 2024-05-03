# GPTAgents-to-GPTAgents

## Description

GPTAgents-to-GPTAgents is a contribution and use case to the [Syntax Sunday series](https://blog.bloodlinealpha.com/), which showcases various software and technologies through engaging examples. This project focuses on a novel approach called the GPT-to-GPT method, which utilizes the OpenAI Chat Completions API, and Actions. The idea is to create many Agents or LLM Agents (using either the API or custom GPTs) that work together to solve problems and complete tasks.

Each Agent is meticulously customized to excel at specific tasks, allowing conversations to be enhanced with detailed and highly specialized responses. While the project utilizes OpenAI's models to demonstrate the GPT-to-GPT method, developers can also explore creating Agents using other cutting-edge LLM models such as Claude (Anthropic), Gemini (Google), or open-source alternatives.

The true power of GPT-to-GPT lies in the synergistic collaboration between these Agents, combining their unique capabilities to tackle multifaceted challenges and automate complex workflows. This open-source project serves as an insightful example for developers, researchers, and AI enthusiasts, inviting them to explore the practical applications of generative AI models like GPT and contribute to the community's collective knowledge."

### What Is Different In This Project?
Instead of focusing on a Boss that manages developers: - DevJr: A nervous, passive, and shy developer who is afraid of getting fired, so it provides littel to no help. - DevInt: A competent dev, who has to pick up the slack for all the devs. It is very knowledgable and talented, - DevSr: A self-proclaimed 10X engineer, who loud and over confident. It makes many mistakes as it works fast and likes to poke fun at the other devs. Instead I created a Boss that creates and manages any type of agent based on the users input/request/scenerio. 

### Your Typical GPT-to-GPT
Within chatGPT I created a custom GPT called `Your Typical Dev Shop` which acts as the **Boss** that create and manages the three Agents. Through the use of GPT Actions, the **Boss** is able to forward requests from the chat interface to the appropriate dev and decide if the response is satisfactory or not. The **Boss** can then use this information to craft a response or ask another question via Actions. 

### How it Works
Essentially we have GPT-to-GPT dialogue in which the **Boss** will forward the users question or prompt to the Agents (OpenAI API) using Actions. The **Boss** will receive the repsonse via the API and decide what to do next. This example simplifies it has the **Boss** really only has two options: ask another question/clarification from the API or relay the response in its own words back to the user.

## Example Of Agents (Provided by @bloodlinealpha)

### Personalized Writing Assistant
A setup where multiple GPT agents assist a user in creating complex documents such as research papers, novels, or business plans. Each agent contributes different expertise—research, drafting, and editing.

**Example:**
- A user needs help writing a novel.
- Agent 1 gathers creative ideas based on the user's genre preferences.
- Agent 2 drafts the initial chapters based on these ideas.
- Agent 3 reviews the draft for consistency and grammatical accuracy.
The Boss ensures the document meets the user's expectations and finalizes the content.

### Dynamic Idea Generation Workshop
In this scenario, agents act as facilitators in a brainstorming session, helping users generate and refine ideas for new products, services, or marketing strategies.

**Example:**
- A user is looking for innovative startup ideas.
- Agent 1 suggests trending industries based on current market analysis.
- Agent 2 generates specific startup ideas, considering the user's interests and resources.
- Agent 3 evaluates the feasibility of these ideas and suggests refinements.
The Boss moderates the session, keeping the discussion focused and productive.

### Multi-level Customer Support
Agents are deployed to handle a tiered customer support system where they interact directly with users to resolve queries ranging from simple to complex.

**Example:**
- A user contacts support with a query about a product.
- Agent 1 attempts to resolve common issues or answer frequently asked questions.
- If unresolved, Agent 2 handles more specific problems requiring deeper product knowledge.
- For complex issues, Agent 3 engages with advanced troubleshooting or escalates to human support if needed.
The Boss oversees the conversation flow, ensuring customer satisfaction at each step.

## Example Of Agents (Provided by @tylan)

1. **LegalEagle Personas:**
   - **LegalEagleJr:** New to the legal field, eager but less experienced. Handles straightforward legal queries.
   - **LegalEagleInt:** Competent with a good handle on most legal matters, can manage moderately complex issues.
   - **LegalEagleSr:** Highly experienced and specialized in complicated legal strategies and negotiations.

**Example Use Case:**
- **User Request:** "I need advice on how to handle a breach of contract."
- **Boss Action:** Depending on the complexity, the Boss might start with LegalEagleInt for an initial assessment and escalate to LegalEagleSr if the issue is very complex. LegalEagleJr might summarize basic legal principles involved.
- **Interaction:** LegalEagleInt explains potential legal actions and consequences; LegalEagleSr provides deep strategic advice. LegalEagleJr might contribute by preparing a simple draft for the user's understanding.
- **Boss Comment:** Adds humor by joking about LegalEagleJr's eagerness to jump into complex legal battles.

2. **Marketeer Personas:**
   - **MarketeerJr:** Handles basic market analysis and simple campaign ideas.
   - **MarketeerInt:** Well-versed in diverse marketing strategies and can tackle more sophisticated campaigns.
   - **MarketeerSr:** Expert in cutting-edge marketing trends and complex consumer engagement strategies.

**Example Use Case:**
- **User Request:** "I need to develop a new marketing strategy for a product launch."
- **Boss Action:** Assigns MarketeerInt to develop the strategy and MarketeerSr to review and add innovative elements. MarketeerJr might gather initial consumer insights.
- **Interaction:** Each persona contributes at different stages, with the Boss moderating and ensuring the strategy is cohesive and comprehensive.
- **Boss Comment:** Might quip about MarketeerJr's enthusiasm for viral trends, adding levity.

3. **TechWhiz Personas:**
   - **TechWhizJr:** Deals with basic tech support and straightforward IT issues.
   - **TechWhizInt:** Handles system integrations, software troubleshooting, and intermediate technical advice.
   - **TechWhizSr:** Expert in high-level IT strategy, cybersecurity, and advanced technology solutions.

**Example Use Case:**
- **User Request:** "We're experiencing frequent system outages; I need a robust IT solution."
- **Boss Action:** Directs TechWhizInt to diagnose the issue and TechWhizSr to propose advanced solutions if necessary. TechWhizJr might assist by compiling user reports and symptoms.
- **Interaction:** Collaborative problem-solving with each TechWhiz contributing based on their expertise level.
- **Boss Comment:** Lightly teases TechWhizJr for suggesting a reboot as a fix for every problem, enhancing user engagement with humor.

These examples demonstrate the versatility of multi-agent interactions, providing user-focused solutions that enhance engagement and deliver tailored support in various contexts.

## Setup
### Install the Repo
To get started with the GPTAgent_to_GPTAgent project, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/HamChowderr/GPTAgents-to-GPTAgents
    ```

2. Navigate to the project directory:

    ```bash
    cd GPTAgents-to-GPTAgents

3. Install the project dependencies using npm:

    ```bash
    npm install
    ```

4. Create a new file named `.env` in the root directory of the project.

5. Open the `.env` file and add your OpenAI API key. You can obtain an API key by signing up for an account on the OpenAI website.

    ```plaintext
    OPENAI_API_KEY=your-api-key
    ```

    - Make sure to replace `your-api-key` with your actual API key.
   
    - Not sure how to get an API-key? Follow the help article on the OpenAI website: [https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)

7. Save the `.env` file.

### Create the Custom GPT
****You must have access to the paid (Plus or Team) version of ChatGPT**

7. Create a custom GPT with Actions using the [GPTAgents-to-GPTAgents.md](GPTAgents-to-GPTAgents.md) configuration.

    - ensure you replace the server URL in the Actions YAML with your own once your LocalTunnel is running in the next steps. It is a bit of a pain but it is the only way I could get it working without actually working without hosting/publishing the API.

8. You're now ready to run the project! Start the Node.js server using the following command:

    ```bash
    npm run dev
    ```

    The server will start running on `http://localhost:3000`. 

9. Install Localtunnel globally (requires NodeJS) to make it accessible anywhere:

    ```bash
    npm install -g localtunnel
    ```

10. Start a webserver on some local port (eg http://localhost:3000) and use the command line interface to request a tunnel to your local server:

    ```bash
    lt --port 3000
    ```

    You will receive a url, for example https://flkajsfljas.loca.lt, that you can share with anyone for as long as your local instance of lt remains active. Any requests will be routed to your local service at the specified port.

11. Copy the URL and paste it in the Actions YAML -> Servers -> URL, replacing `https://brave-ties-punch.loca.lt`, but ensuring you keep the `/agents` after your URL. Save the changes by clicking the `Update` button in the top right.

12. You can now interact with the Agents using the custom GPT. Click `View GPT` to begin playing!
