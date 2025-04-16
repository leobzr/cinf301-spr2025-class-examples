import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../../src/api/users/user.model.js';
import { getAllUsers, isUserAdult } from '../../src/api/users/user.service.js';

dotenv.config({ path: '.env.test' });

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('user.service', () => {
  it('isUserAdult returns true for age >= 18', () => {
    expect(isUserAdult({ age: 25 })).toBe(true);
  });

  it('isUserAdult returns false for age < 18', () => {
    expect(isUserAdult({ age: 17 })).toBe(false);
  });

  it('getAllUsers returns users from test DB', async () => {
    const users = await getAllUsers(User);
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThanOrEqual(0);
  });
});