'use client';

import { useFormState } from 'react-dom';
import { createSnippet } from '@/actions';

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(createSnippet, { message: '' });

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            id="title"
            name="title"
            className="w-full border rounded p-2"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            className="w-full border rounded p-2"
          />
        </div>

        {formState.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        )}

        <button type="submit" className="bg-blue-200 rounded p-2">
          Create
        </button>
      </div>
    </form>
  );
}
