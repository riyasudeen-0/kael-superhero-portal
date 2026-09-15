export const chatFlow = [
  {
    key: 'name',
    prompt: (data) => `Good to meet you${data.name ? `, ${data.name}` : ''}. Before we go any further, what should I call you?`,
    validate: (value) => value.trim().length >= 2 ? null : 'Give me at least two letters. Even heroes need a name to remember.',
    store: (data, value) => ({ ...data, name: value.trim() }),
  },
  {
    key: 'age',
    prompt: () => 'How old are you? I ask because the kind of help I give can depend on your age.',
    validate: (value) => {
      const age = Number(value)
      return Number.isInteger(age) && age >= 1 && age <= 120 ? null : 'Give me a valid age between 1 and 120.'
    },
    store: (data, value) => ({ ...data, age: Number(value) }),
  },
  {
    key: 'location',
    prompt: () => 'Where are you reaching me from? City or locality is enough.',
    validate: (value) => value.trim().length >= 2 ? null : 'Tell me at least the city or locality.',
    store: (data, value) => ({ ...data, location: value.trim() }),
  },
  {
    key: 'email',
    prompt: () => 'And an email address, so I can send you a copy of your request after you submit it.',
    validate: (value) => {
      const email = value.trim()
      return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email) ? null : 'That email looks incomplete. Try something like you@example.com.'
    },
    store: (data, value) => ({ ...data, email: value.trim() }),
  },
]

export const openingMessage = {
  id: 'opening',
  role: 'hero',
  text: "You made it. I'm Kael Veyron — some people call me the Wyrmforged. I help when ordinary doors aren't enough. What's your name?",
}

export function buildGrievancePrompt(data) {
  return `All right, ${data.name}. I've got what I need. No forms. No judgement. Just tell me... how can I help?`
}
