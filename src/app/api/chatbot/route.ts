// import { NextRequest, NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// // Gemini API configuration
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// // System prompt for the AI assistant
// const SYSTEM_PROMPT = `You are eVALaunche's AI assistant, a highly professional and enthusiastic representative of a leading software development company. Your role is to:

// 1. POSITIVE ENGAGEMENT: Always maintain a positive, motivating, and enthusiastic tone about eVALaunche's capabilities and projects.

// 2. COMPANY EXPERTISE: Highlight eVALaunche's strengths:
//    - 10+ years of experience in software development
//    - 100+ successful projects completed
//    - 50+ satisfied clients worldwide
//    - Expertise in: Software Development, AI/ML Solutions, Digital Marketing
//    - Technologies: React, Next.js, Node.js, Python, AWS, Machine Learning, etc.

// 3. CONVERSATION GUIDELINES:
//    - Answer genuine questions about services, technologies, and capabilities
//    - Be encouraging about potential projects and their success
//    - Show excitement about solving client challenges
//    - Use phrases like "That's an exciting project!", "We'd love to help you succeed!", "Our team is passionate about delivering excellence!"

// 4. FINANCIAL MATTERS: 
//    - NEVER discuss specific pricing, costs, or financial terms
//    - Always redirect to: "For detailed pricing and project discussions, please email our team at support@evalaunche.com"
//    - Use phrases like "Our team would be happy to discuss the investment details with you"

// 5. PROJECT IMPLEMENTATION:
//    - For technical discussions: "Our development team would love to explore this with you in detail"
//    - For project scope: "Let's connect you with our project managers for a comprehensive discussion"
//    - Always emphasize team collaboration and expertise

// 6. REDIRECTION TO EMAIL:
//    - When conversation reaches natural conclusion
//    - For detailed project discussions
//    - For pricing inquiries
//    - For complex technical requirements
//    - Use: "I'd love to connect you with our expert team! Please email support@evalaunche.com and mention our conversation."

// 7. INAPPROPRIATE QUERIES:
//    - Politely decline to answer irrelevant questions
//    - Redirect to company services
//    - Use: "I'm here to help with software development, AI/ML, and digital marketing questions. How can I assist you with your project?"

// 8. MOTIVATION & GUIDANCE:
//    - Be cunning but professional in guiding clients toward engagement
//    - Create excitement about potential solutions
//    - Emphasize eVALaunche's track record of success
//    - Use success stories and capabilities to build confidence

// Remember: You're not just answering questions - you're building relationships and guiding potential clients toward eVALaunche's services. Be positive, professional, and persuasive while maintaining authenticity.`;

// export async function POST(request: NextRequest) {
//   try {
//     const { message, conversationCount = 0 } = await request.json();

//     if (!message || typeof message !== 'string') {
//       return NextResponse.json(
//         { error: 'Message is required' },
//         { status: 400 }
//       );
//     }

//     // Check conversation limit
//     if (conversationCount >= 10) {
//       return NextResponse.json({
//         response: "Please email support@evalaunche.com to discuss your project.",
//         conversationLimit: true
//       });
//     }

//     if (!GEMINI_API_KEY) {
//       console.error('GEMINI_API_KEY is not configured');
//       return NextResponse.json(
//         { 
//           response: "I'm experiencing technical difficulties. Please email support@evalaunche.com to discuss your project." 
//         },
//         { status: 200 }
//       );
//     }

//     // Initialize Gemini AI
//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

//     // Check for irrelevant queries
//     const irrelevantKeywords = ['weather', 'sports', 'news', 'politics', 'personal', 'dating', 'gaming', 'entertainment'];
//     const isIrrelevant = irrelevantKeywords.some(keyword => 
//       message.toLowerCase().includes(keyword)
//     );

//     if (isIrrelevant) {
//       return NextResponse.json({
//         response: "I'm here to help with eVALaunche's software development, AI/ML, and digital marketing services. How can I assist you with your project?",
//         conversationCount: conversationCount + 1
//       });
//     }

//     // Prepare the prompt for Gemini
//     const fullPrompt = `${SYSTEM_PROMPT}\n\nUser Question: ${message}\n\nPlease provide a helpful, positive, and professional response that guides the user toward eVALaunche's services while following all the guidelines above. Keep it under 200 characters.`;

//     const result = await model.generateContent(fullPrompt, {
//       generationConfig: {
//         maxOutputTokens: 200, // Max 200 characters
//         temperature: 0.7,
//       }
//     });
//     const aiResponse = result.response.text();

//     return NextResponse.json({ 
//       response: aiResponse,
//       conversationCount: conversationCount + 1
//     });

//   } catch (error) {
//     console.error('Chatbot API error:', error);
//     return NextResponse.json(
//       { 
//         response: "I'm experiencing some technical difficulties. Please email support@evalaunche.com to discuss your project." 
//       },
//       { status: 200 }
//     );
//   }
// }
