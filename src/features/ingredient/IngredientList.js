import React, {useState} from 'react';

function IngredientList() {
  const ingredients = [
    {
      name: 'Carrots Whole',
      measurement: 'Lbs',
      spoils: '1 week',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Cucumber Whole',
      measurement: 'Lbs',
      spoils: '1 week',
      image:
        'https://images.heb.com/is/image/HEBGrocery/000319432?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0',
    },
    {
      name: 'Chickpeas Canned',
      measurement: '29 oz',
      spoils: 'infinite',
      image:
        'https://cdn11.bigcommerce.com/s-j00trvqcfv/images/stencil/500x659/products/5673/35014/102959__25182.1623867335.jpg?c=1',
    },
    // More people...
  ]

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Measurment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Spoils
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {ingredients.map((ingredient) => (
                <tr key={ingredient.name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={ingredient.image} alt=""/>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{ingredient.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ingredient.measurement}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {ingredient.spoils}
                      </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IngredientList