import { Given, When, Then } from 'cucumber';
import * as assert from 'assert';
import { ScenarioContext } from '../support/ScenarioContext';

Then(/^the dashboard is the active view$/, assertDashboardIsActive);

async function assertDashboardIsActive(this: ScenarioContext) {
  const isPresent = await this.appDashboard.isPresent();
  assert.ok(isPresent, 'Expected dashboard component to be present');
}
