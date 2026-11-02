/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col bg-slate-50">
      <iframe
        src="/admin.html"
        title="Admin Panel"
        className="w-full h-full border-none flex-1"
      />
    </div>
  );
}
