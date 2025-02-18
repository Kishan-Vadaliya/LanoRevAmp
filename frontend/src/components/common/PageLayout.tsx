import React, { ReactNode } from "react";

interface PageLayoutProps {
  title?: string;
  children: ReactNode;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  children,
  actionButton,
}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-full">
      {(title || actionButton) && (
        <div className="sm:flex sm:items-center mb-6">
          {title && (
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
            </div>
          )}
          {actionButton && (
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                onClick={actionButton.onClick}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600"
              >
                {actionButton.text}
              </button>
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default PageLayout;
