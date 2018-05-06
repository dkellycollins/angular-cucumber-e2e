import { Given, When, Then } from 'cucumber';
import * as assert from 'assert';
import { getPageElts } from '../support/getPageElts';

Then(/^the dashboard is the active view$/, assertDashboardIsActive);

function assertDashboardIsActive() {
  const page = getPageElts();
  assert.ok(page.appDashboard.isPresent(), 'Expected dashboard component to be present');
}
