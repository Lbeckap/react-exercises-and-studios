import React from 'react';
import classes from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <div>
      <p>
      <h3 className={classes.choresHeading}>Chores List</h3>
      <ol className={classes.choresText}>
         <li>Wash laundry</li>
         <li>Vacuum</li>
         <li>Groom Fancy</li>
         <li>Mow lawn</li>
      </ol>
      </p>
      </div>
      );
}