import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Link from 'next/link';
import React from 'react';

export default function SiteTable({ sites }) {
  return (
    <>
      <table className="table-fixed w-full shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-500 uppercase ">
            <th className="text-left px-4 py-2">Site Name</th>
            <th className="text-left">Site Link</th>
            <th className="text-left">Feedback Link</th>
            <th className="text-left">Date Added</th>
          </tr>
        </thead>
        <tbody className="p-4 ">
          {sites.map((site) => (
            <tr key={site.link} className="bg-white border-2 border-gray-200">
              <td className="px-4 py-2 font-semibold">{site.name}</td>
              <td className="text-blue-700">
                <a href={site.link}>{site.link}</a>
              </td>
              <td>
                <Link href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                  <a>view Feedback</a>
                </Link>
              </td>
              <td>{format(parseISO(site.createdAt), 'PPpp')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
