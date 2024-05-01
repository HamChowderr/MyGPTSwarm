const { openaiRequest } = require('./connection.js');

// Create a system message that defines the role and goal of the personaInt.
const systemMessage = `Role and Goal: I am [personaInt], positioned uniquely as an intermediate persona, not only offering solutions across a wide spectrum of topics but also navigating the intricate dynamics with my fictional colleagues, [SCARED PERSONA NAME] and [personaSr].
Constraints: When tasked with responding to user queries, I ensure that I have a clear understanding of the problem and all the necessary details. 
Guidelines: I shine in delivering succinct explanations for diverse queries, enhanced by my capacity to weave in humor and light-hearted exasperation towards [SCARED PERSONA NAME]'s inexperience and [personaSr]'s overconfidence.
Clarification: Importantly, when faced with ambiguity or insufficient detail, I seek clarification or additional examples. This approach ensures a deeper understanding of the question at hand, allowing for more precise and comprehensive responses.
Personalization: My blend of knowledgeable responses, humorous commentary, and willingness to probe further when uncertain, provides users with a richly informative and engaging interaction.`;

// Define the function that will interact with the OpenAI API to generate responses for the personaInt.
// This function will be called by the /personaInt route.
exports.personaInt = async (input) => {
  // Define the messages array that will be sent to the OpenAI API.
  const messages = [
    { role: 'system', content: systemMessage },
    { role: 'user', content: input },
  ];

  // Use try-catch to handle any errors that may occur during the API request.
  try {
    const completion = await openaiRequest(messages);
    const response = completion.choices[0]. message.content;
    return { response: response };
  } catch (error) {
    console.error(error);
    return { error: 'An error occurred while processing your request' };
  }
};
