import { Form, redirect, useActionData } from 'react-router-dom';

export default function Contact() {

    return (
        <section className="">
            <div className="p-8">
                <div className="p-4 py-8 rounded-lg shadow-xl">
                    <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900">Contact Us</h2>
                        <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" placeholder="name@mail.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                                <input type="text" id="subject" className="block w-full p-3 text-sm text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-[#20B486] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export const contactAction = async ({ request }) => {
    console.log(request);
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    if (submission.message.length < 10) {
        return { error: "Message should be at least 10 characters long." };
    }
    return redirect('/');
}