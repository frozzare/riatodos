# Draft

## User

{
  id: Guid
  name: String,
  email: String,
  lists: ListCollection,
}

## List

{
  id: Guid,
  title: String,
  created: Date,
  tasks: TaskCollection,
  collaborators: UserCollection
}

## Task

{
  id: Guid,
  title: String,
  due_date: Date,
  created: Date,
  created_by: User
  subtasks: SubTaskCollection,
  notes: NoteCollection
}

## Subtask

{
  id: Guid,
  title: String,
  due_date: Date,
  created: Date,
  created_by: User
}

## Note

{
  id: Guid,
  content: String
  created: Date,
  created_by: User
}
