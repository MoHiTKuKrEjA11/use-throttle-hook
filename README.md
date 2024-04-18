UseThrottle Hook --

1->Initialise State

i- Create a state to hold the throttled value using useState.

ii-Track last Execution Time

useRef to keep track of the last time the function was
executed

useEffect for Throttling

  i- Set up a Timer (using setTimeout) to handle the logic
  ii-Inside Timer
    a- Check the time elapsed since last execution
    b- If the elapsed time is greater than or equal to the
       specified delay, update the throttled value and the last
       execution time.
  iii-Calculate the remaining time for next execution (if any)
  iv-Return a cleanup function to clear the timer
  v-Return the  value from the hook