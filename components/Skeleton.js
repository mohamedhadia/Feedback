import React from 'react';

export default function Skeleton() {
  return (
    <div>
      <div className=" p-4 max-w-lg w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded "></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded "></div>
              <div className="h-4 bg-gray-300 rounded "></div>
              <div className="h-4 bg-gray-300 rounded "></div>
              <div className="h-4 bg-gray-300 rounded "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
