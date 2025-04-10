import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API with your key
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
  
  // Function to fetch user-specific data (mocked for this example)
  
  // Function to generate personalized financial advice
  const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
    console.log(totalBudget, totalIncome, totalSpend);
    try {
      
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const userPrompt = `
        Based on the following financial data:
        - Total Budget: ${totalBudget} USD 
        - Expenses: ${totalSpend} USD 
        - Incomes: ${totalIncome} USD
        Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
      `;
  
      // Send the prompt to the OpenAI API
      const result = await model.generateContent(userPrompt);
      const response = await result.response;
      const advice = response.text();
  
      console.log(advice);
      return advice;
    } catch (error) {
      console.error("Error fetching financial advice:", error);
      return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
    }
  };
  
  export default getFinancialAdvice;