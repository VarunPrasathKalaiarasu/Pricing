import React from 'react';

function Dashboard() {
  const data = [
    {
      name: 'Earnings (Monthly)',
      value: '$40000',
      color: 'primary',
    },
    {
      name: 'Earnings (Annual)',
      value: '$40000',
      color: 'success',
    },
    {
      name: 'Task',
      value: '50%',
      color: 'info',
    },
    {
      name: 'Pending request',
      value: '18',
      color: 'warning',
    },
  ];
  return (
    <div className="container">
      <h3>Dashboard</h3>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-3 ">
              <div
                class={`card border-3 border-${item.color} shadow mb-5 bg-body-tertiary rounded`}
              >
                <div class="card-body">
                  <h6 class={`card-title text-uppercase text-${item.color}`}>
                    {item.name}
                  </h6>
                  <p class="card-text ">
                    <h4>{item.value}</h4>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
