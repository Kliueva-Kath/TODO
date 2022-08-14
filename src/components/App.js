import { useState, useEffect } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";
import SearchBar from "./SearchBar";
import data from "../utils/data.json";

function App() {
  // стейт массива заметок -
  // изначальные заметки отрисовываются из .json файла с массивом заметок
  const [tasks, setTasks] = useState(data);
  // стейт режима редактирования, отвечает за отрисовку правильной формы
  const [isEditing, setIsEditing] = useState(false);
  // заметка, находящаяся в процессе редактирования
  const [editedTask, setEditedTask] = useState({});
  // стейт контролируемого инпута формы редактирования
  const [editValue, setEditValue] = useState("");
  // стейт контролируемого инпута формы поиска
  const [searchTerm, setSearchTerm] = useState("");

  /**
   *Отвечает за удаление заметки
   * @param {object} task - заметка, кнопка удаления которой была нажата
   */
  function handleDeleteTask(task) {
    setTasks((state) => state.filter((t) => t._id !== task._id));
  }

  /**
   * Отвечает за добавление заметки
   * @param {string} taskValue - значение инпута в форме добавления заметки при сабмите
   */
  /**
   * Отвечает за добавление заметки -
   * при сабмите формы создает новую заметку и вставляет ее в разметку
   * @param {string} taskValue - значение инпута при сабмите формы добавления заметки
   */
  function handleAddTask(taskValue) {
    /**
     * @constant {object} newTask - создается новая заметка
     * _id - рандомное целое число, чтобы избежать повторения ключей при удалении и добавлении заметок
     */
    const newTask = { _id: Math.floor(Math.random() * 10000), task: taskValue };
    setTasks([newTask, ...tasks]);
  }

  /**
   * Отвечает за клик на кнопку редактирования заметки -
   * - переключает в режим редактирования
   * - назначает редактируемую заметку
   * - подставляет сожержимое заметки в инпут формы
   * @param {object} clickedTask - заметка, на которой была нажата кнопка редактирования
   */
  function handleEditTaskButtonClick(clickedTask) {
    setIsEditing(true);
    setEditedTask(clickedTask);
    setEditValue(clickedTask.task);
  }

  /**
   * контролирует инпут формы редактирования
   * @param {object} evt - событие изменения инпута
   */
  function handleEditFormChange(evt) {
    setEditValue(evt.target.value);
  }

  /**
   * Отвечает за исполнение редактирования заметки:
   * - исключает редактируемую заметку из списка фильтром по _id
   * - создает новую заметку при сабмите формы и вставляет ее в разметку
   * - очищает значение инпута и выходит из режима редактирования
   * @param {string} editValue - стейт инпута при сабмите формы редактирования
   */
  function handleEditTask(editValue) {
    const tasksUpdate = [...tasks].filter(
      (task) => task._id !== editedTask._id
    );
    const newTask = { _id: editedTask._id, task: editValue };
    setTasks([newTask, ...tasksUpdate]);

    setEditValue("");
    setIsEditing(false);
  }

  /**
   * Отвечает за клику по кнопке отмены редактирования -
   * выходит из режима редактирования
   */
  function handleCancelEditButtonClick() {
    setIsEditing(false);
  }

  /**
   * Отвечает за контроль за изменением инпута строки поиска
   * при каждом изменении активирует функцию поиска
   * @param {object} evt - событие изменения инпута
   * @returns {any}
   */
  function handleSearchInputChange(evt) {
    setSearchTerm(evt.target.value);
    console.log(searchTerm);
  }

  // поиск заметок
  // эффект использован, чтобы избегать отставания стейта searchTerm от значения инпута
  // без подключения к серверу поиск работает только на изначальном массиве, представленном непосредственно в коде
  useEffect(() => {
    const foundTasks = data.filter((task) => {
      return task.task.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setTasks(foundTasks);
  }, [searchTerm]);

  return (
    <div className='App'>
      <Header />
      <div className='todo'>
        <div className='todo__left-side'>
          <SearchBar
            onSearchInputChange={handleSearchInputChange}
            searchTerm={searchTerm}
          />
          <TodoList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onEditTaskButtonClick={handleEditTaskButtonClick}
          />
        </div>
        {isEditing ? (
          <EditTaskForm
            onEditTask={handleEditTask}
            editedTask={editedTask}
            isEditing={isEditing}
            editValue={editValue}
            onEditFormChange={handleEditFormChange}
            onCancelEditButtonClick={handleCancelEditButtonClick}
          />
        ) : (
          <AddTaskForm onAddTask={handleAddTask} />
        )}
      </div>
    </div>
  );
}

export default App;
