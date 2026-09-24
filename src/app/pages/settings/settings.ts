import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type SettingsSection =
  | 'general'
  | 'attendance'
  | 'sla'
  | 'notifications'
  | 'users'
  | 'integrations';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  activeSection: SettingsSection = 'general';

  requireAssignee = true;
  reopenAfterCustomerReply = true;
  notifyPriorityChanges = false;

  selectSection(section: SettingsSection): void {
    this.activeSection = section;
  }

  toggleRequireAssignee(): void {
    this.requireAssignee = !this.requireAssignee;
  }

  toggleReopenAfterCustomerReply(): void {
    this.reopenAfterCustomerReply = !this.reopenAfterCustomerReply;
  }

  toggleNotifyPriorityChanges(): void {
    this.notifyPriorityChanges = !this.notifyPriorityChanges;
  }

  saveChanges(): void {
    console.log('Configurações salvas', {
      requireAssignee: this.requireAssignee,
      reopenAfterCustomerReply: this.reopenAfterCustomerReply,
      notifyPriorityChanges: this.notifyPriorityChanges,
    });
  }
}