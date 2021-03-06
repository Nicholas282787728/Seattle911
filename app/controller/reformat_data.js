'use strict';
const debug = require('debug')('seattle911:reformat_data');
const IncidentPointCtr = require('./incident_points_ctrl');

module.exports = {
  'TRESPASS': 'PROPERTY',
  'SHOPLIFTING': 'PROPERTY',
  'DISTURBANCES': 'MISC',
  'BIKE': 'PROPERTY',
  'OTHER PROPERTY': 'PROPERTY',
  'CAR PROWL': 'PROPERTY',
  'OTHER VICE': 'VICE',
  'AUTO THEFTS': 'PROPERTY',
  'TRAFFIC RELATED CALLS': 'VEHICLE',
  'PERSON DOWN/INJURY': 'ASSIST',
  'PROPERTY DAMAGE': 'PROPERTY',
  'LIQUOR VIOLATIONS': 'VICE',
  'SUSPICIOUS CIRCUMSTANCES': 'MISC',
  'BEHAVIORAL HEALTH': 'MISC',
  'LEWD CONDUCT': 'VICE',
  'FRAUD CALLS': 'PROPERTY',
  'ROBBERY': 'VIOLENT',
  'ASSAULTS': 'VIOLENT',
  'NUISANCE, MISCHIEF': 'MISC',
  'PROPERTY - MISSING, FOUND': 'PROPERTY',
  'MISC MISDEMEANORS': 'MISC',
  'THREATS, HARASSMENT': 'VIOLENT',
  'PERSONS - LOST, FOUND, MISSING': 'ASSIST',
  'BURGLARY': 'PROPERTY',
  'MOTOR VEHICLE COLLISION INVESTIGATION': 'VEHICLE',
  'FALSE ALARMS': 'MISC',
  'ARREST': 'MISC',
  'WEAPONS CALLS': 'MISC',
  'PROSTITUTION': 'VICE',
  'HAZARDS': 'MISC',
  'NARCOTICS COMPLAINTS': 'VICE',
  'PROWLER': 'MISC',
  'ANIMAL COMPLAINTS': 'MISC',
  'RECKLESS BURNING': 'MISC',
  'HARBOR CALLS': 'VEHICLE',
  'PUBLIC GATHERINGS': 'MISC',
  'DRIVE BY (NO INJURY)': 'VIOLENT',
  'HOMICIDE': 'VIOLENT',
  'FAILURE TO REGISTER (SEX OFFENDER)': 'MISC',
  'FALSE ALACAD': 'MISC',
  'VICE CALLS': 'VICE'
};
