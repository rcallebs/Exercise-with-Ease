const workouts = [
    {id: 125223, workout: 'Bench', done: true},
    {id: 127904, workout: 'Squat', done: false},
    {id: 139608, workout: 'Deadlift', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return workouts;
  }