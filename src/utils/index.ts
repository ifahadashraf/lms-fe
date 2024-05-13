export const validateEmails = (stringifiedEmails: string | string[]) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emails = typeof stringifiedEmails === 'string' ? stringifiedEmails.split(',') : stringifiedEmails;
  for(const email of emails) {
    if(!regex.test(email)) {
      return false;
    }
  }
  return true;
}